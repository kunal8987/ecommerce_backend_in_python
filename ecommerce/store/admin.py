from django.contrib import admin
from .models import Category, Product


# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at")
    search_fields = ("name",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "in_stock", "category", "created_at")
    list_filter = ("in_stock", "category")
    search_fields = ("name", "description")
    raw_id_fields = ("category",)
    readonly_fields = ("created_at",)
