#include<stdio.h>
int main()
{
	int a,b;
	scanf("%d%d",&a,&b);
	if(a>100||b>100)a=1;
    else if(a<60||b<60)a=3;
	else a=2;
		switch (a)
	{
		case 1:printf("it is error");break;
		case 2:printf("it is pass");break;
		case 3:printf("it is not pass");break;
	}
	return 0;
}
