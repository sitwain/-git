#include<stdio.h>
int main()
{
    int a,b=6;
	printf("请输入一个整数：");
	scanf("%d",&a);
	a=a-b;
	printf("该整数减去6的结果是：%d\n",a);
	return 0;
}