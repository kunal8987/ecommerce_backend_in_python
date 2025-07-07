from rest_framework import viewsets, status, views
from .models import Cart, CartItem, Order, OrderItem
from django.db import transaction
from rest_framework.response import Response
from .serializers import CartSerializer, CartItemSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated


class CartViewSet(viewsets.ModelViewSet):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user)

    def perform_create(self, serializer):
        cart = Cart.objects.get_or_create(user=self.request.user)[0]
        serializer.save(cart=cart)


# ------------------------------xxxx----------------


class CheckoutView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    @transaction.atomic
    def post(self, request):
        user = request.user
        try:
            cart = Cart.objects.get(user=user)
        except Cart.DoesNotExist:
            return Response(
                {"detail": "Cart is empty."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not cart.items.exists():
            return Response(
                {"detail": "Cart has no items."}, status=status.HTTP_400_BAD_REQUEST
            )

        # Create order
        order = Order.objects.create(user=user)

        # Create OrderItems from CartItems
        for item in cart.items.all():
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price,
            )

        cart.items.all().delete()  # Clear cart
        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
