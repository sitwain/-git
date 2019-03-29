#include<stdio.h>
int main()
{
	int a,b,c,d;
	puts("请输入两个整数：");
	printf("整数1：");scanf("%d",&a);
	printf("整数2：");scanf("%d",&b);
	printf("整数3：");scanf("%d",&c);
	d=a+b+c;
	printf("它们的和是：%d\n",d);
	return 0;
}