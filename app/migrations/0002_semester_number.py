# Generated by Django 2.1.5 on 2020-04-09 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='semester',
            name='number',
            field=models.IntegerField(default='0'),
        ),
    ]