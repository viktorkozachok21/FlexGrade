# Generated by Django 2.1.5 on 2020-04-11 11:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_auto_20200411_1147'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='flexuser',
            options={'ordering': ['last_name', 'first_name', 'sur_name']},
        ),
    ]