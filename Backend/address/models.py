from django.db import models

# Create your models here.

""" Contact us Page """

class ShopAddress(models.Model):
    address = models.CharField(max_length=500)
    email_1 = models.EmailField()
    email_2 = models.EmailField(blank=True)
    email_3 = models.EmailField( blank=True)
    email_4 = models.EmailField( blank=True)
    email_5 = models.EmailField( blank=True)
    email_6 = models.EmailField( blank=True)
    phone_number_1 = models.CharField(max_length=200)
    phone_number_2 = models.CharField(max_length=200 ,blank=True)
    phone_number_3 = models.CharField(max_length=200 ,blank=True)
    phone_number_4 = models.CharField(max_length=200 ,blank=True)
    phone_number_5 = models.CharField(max_length=200 ,blank=True)
    phone_number_6 = models.CharField(max_length=200 ,blank=True)

    class Meta:
        verbose_name_plural="Bizimlə əlaqə"

    def __str__(self):
        return f"unvan = {self.address}"

class WorkingDuration(models.Model):
    duration_d_from = models.CharField(max_length=100, verbose_name='Heftenin necenci gununden')
    duration_d_to = models.CharField(max_length=100, verbose_name='Heftenin necenci gunune')
    duration_t_from = models.CharField(max_length=100, verbose_name='Saat neceden')
    duration_t_to = models.CharField(max_length=100, verbose_name='Saat neceye')
    saturday_from = models.CharField(max_length=100, blank=True, verbose_name='Şənbə günü saat neçədən')
    saturday_to = models.CharField(max_length=100, blank=True, verbose_name='Şənbə günü saat neçəyə')

    def __str__(self):
        return "Is intervali"

    class Meta:
        verbose_name_plural = "İş intervalı"

class TechniqueSupport(models.Model):
    support_text = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "Texniki dəstək"
    def __str__(self):
        return self.support_text


""" FOOTER """
class CopyRigth(models.Model):
    year = models.CharField(max_length=10,blank=True)
    context = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.year} -> {self.context}"
