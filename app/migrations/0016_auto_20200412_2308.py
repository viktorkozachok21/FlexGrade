# Generated by Django 2.1.5 on 2020-04-12 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_auto_20200412_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='old_degree',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
