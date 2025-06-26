from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CartViewSet, CartItemViewSet, CheckoutView

router = DefaultRouter()
router.register("cart", CartViewSet, basename="cart")
router.register("cart-items", CartItemViewSet, basename="cart-item")
router.register("checkout", CheckoutView, basename="checkout")


urlpatterns = [
    path("", include(router.urls)),
]

""" 
Now you can:
- Add products to the cart (POST /api/store/cart-items/)
- List your cart (GET /api/store/cart/)
- Update item quantity or remove a product from the cart

 your frontend or Postman can POST to /api/store/checkout/, and the current user's cart will be turned into an order


"""
