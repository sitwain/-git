#include<stdio.h>
int main()
{
	int a,b=12;
	printf("请输入一个整数");
	scanf("%d",&a);
    a=a+b;
	printf("该整数加上12的结果是%d\n",a);
	return 0;
}