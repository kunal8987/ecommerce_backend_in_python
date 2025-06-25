from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


# ViewSet for Category model, provides CRUD operations
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# ViewSet for Product model, provides CRUD operations and supports filtering, searching, and ordering
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # Enable filtering, searching, and ordering
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    # Allow filtering by category and in_stock fields
    filterset_fields = ["category", "in_stock"]
    # Allow searching by name and description fields
    search_fields = ["name", "description"]
    # Allow ordering by price and created_at fields
    ordering_fields = ["price", "created_at"]
    # Default ordering by created_at descending
    ordering = ["-created_at"]
