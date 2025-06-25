from django.db import models

# Model representing a product category
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Unique name for the category
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp when the category was created

    def __str__(self):
        return self.name  # String representation of the category

# Model representing a product
class Product(models.Model):
    name = models.CharField(max_length=255)  # Name of the product
    description = models.TextField(blank=True)  # Optional description of the product
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Price of the product
    in_stock = models.BooleanField(default=True)  # Availability status
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)  # Optional product image
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)  # Category the product belongs to
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp when the product was created

    def __str__(self):
        return self.name  # String representation of the product