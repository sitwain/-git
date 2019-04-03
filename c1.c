#include<stdio.h>
int main()
{
	int a,b,c;
	int q=0,w=1,e=2,r=3;
	scanf("%d%d%d",&a,&b,&c);
	if(a+b>c&&a+c>b&&b+c>a) 
	{
	 if(a==b&&b==c&&c==a) printf("%d",w);
	 else if(a==b||a==c||b==c) printf("%d",e);
	 else printf("%d",r);
	}
	else printf("%d",q);
	return 0;
}