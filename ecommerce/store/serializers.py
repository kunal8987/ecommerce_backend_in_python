from rest_framework import serializers
from .models import Product, Category


# Serializer for the Category model
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"  # Serialize all fields of Category


# Serializer for the Product model
class ProductSerializer(serializers.ModelSerializer):
    # Nested serializer to display category details (read-only)
    category = CategorySerializer(read_only=True)
    # Field to accept category ID when creating/updating a product (write-only)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source="category", write_only=True
    )

    class Meta:
        model = Product
        fields = "__all__"  # Serialize all fields of Product
