# Generated by Django 3.1.5 on 2021-03-21 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about_context', models.TextField(verbose_name='daha etrafli')),
            ],
        ),
        migrations.CreateModel(
            name='Mission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mission_context', models.TextField(verbose_name='missiyamiz')),
            ],
        ),
        migrations.CreateModel(
            name='OurShop',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ourshop_context', models.TextField(verbose_name='magazamiz')),
            ],
        ),
    ]
