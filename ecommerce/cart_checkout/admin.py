from django.contrib import admin
from .models import Cart, CartItem, Order, OrderItem


# Register your models here.
class CartItemInline(admin.TabularInline):
    model = CartItem
    raw_id_fields = ("product",)
    extra = 0


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "created_at")
    search_fields = ("user__email",)
    inlines = (CartItemInline,)


# Inline for order items
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    readonly_fields = ("price",)
    raw_id_fields = ("product",)
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "placed_at")
    list_filter = ("placed_at",)
    search_fields = ("user__email",)
    inlines = (OrderItemInline,)
