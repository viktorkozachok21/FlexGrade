# Generated by Django 2.1.5 on 2020-04-03 22:17

from django.db import migrations
import model_utils.fields


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20200403_1347'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='group',
            options={'ordering': ['-number']},
        ),
        migrations.AlterField(
            model_name='specialty',
            name='degree',
            field=model_utils.fields.StatusField(choices=[(0, 'dummy')], default='Молодший спеціаліст', max_length=100, no_check_for_status=True),
        ),
    ]
