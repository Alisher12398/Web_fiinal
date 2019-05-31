from django.urls import path
from api.views import fbv,gcbv

urlpatterns = [
    # fbv
    path('products/', gcbv.ProductList.as_view()),
    path('products/<int:pk>/', gcbv.ProductDetail.as_view()),

    path('user_products/', fbv.user_products),
    path('user_products/<int:pk>/', fbv.user_products_detail)
]