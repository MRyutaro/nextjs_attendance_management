# Generated by Django 4.0.4 on 2023-06-14 01:56

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='expiration_time',
            field=models.DateTimeField(default=datetime.datetime(2023, 6, 15, 1, 56, 18, 701895, tzinfo=utc), help_text='招待URLの有効期限です。デフォルトは1日です。'),
        ),
        migrations.AlterField(
            model_name='role',
            name='role',
            field=models.CharField(choices=[('owner', 'オーナー'), ('manager', 'マネージャー'), ('employee', '従業員')], default='employee', help_text='ユーザーの権限を設定します。            ownerは全ての権限を持ちます。            managerは従業員の管理ができます。            employeeは従業員の勤怠を入力できます。', max_length=10, unique=True),
        ),
    ]