from django.db import models




class ProductCategory(models.Model):
    name = models.CharField(max_length=150, blank=False,
                            verbose_name='Kateqoriya adı AZ')
    parent = models.ForeignKey('self', related_name="childeren", blank=True,
                            null=True, on_delete=models.CASCADE, verbose_name="Üst Kateqoriya")

    def __str__(self):
        full_path = [self.name]
        k = self.parent
        while k is not None:
            full_path.append(k.name)
            k = k.parent
        return ' -> '.join(full_path[::-1])

    
class FilterCategory(models.Model):
    name = models.CharField(max_length=150, blank=False,
                            verbose_name='Kateqoriya adı AZ')
    parent = models.ForeignKey('self', related_name="childeren", blank=True,
                               null=True, on_delete=models.CASCADE, verbose_name="Üst Kateqoriya")

    def __str__(self):
        full_path = [self.name]
        k = self.parent
        while k is not None:
            full_path.append(k.name)
            k = k.parent
        return ' -> '.join(full_path[::-1])

    
