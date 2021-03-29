# Generated by Django 3.1.5 on 2021-03-25 12:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0006_product_images'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShoppingCart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=0)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('products', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=150, verbose_name='Ad')),
                ('lastname', models.CharField(max_length=150, verbose_name='Soyad')),
                ('phone', models.CharField(max_length=30, verbose_name='Əlaqə nömrəsi')),
                ('ordered_date', models.DateTimeField(verbose_name='Sifarişin edilmə tarixi')),
                ('shipping_address', models.TextField(blank=True, max_length=5000, null=True, verbose_name='Çatdırılacaq ünvan')),
                ('amount', models.CharField(blank=True, max_length=100, null=True, verbose_name='Məbləğ')),
                ('transaction_id', models.CharField(blank=True, max_length=20, null=True)),
                ('items', models.ManyToManyField(blank=True, to='order.ShoppingCart', verbose_name='Məhsullar')),
                ('order_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
