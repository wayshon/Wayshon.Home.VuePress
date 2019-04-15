## iOS获取当前屏幕的视图控制器
`2016-04-11`

在一些子View中经常需要知道当前是跑在哪个ViewController里，经常由于嵌套太深获取承载VC比较麻烦，这里封装一个方法，用来获取当前屏幕的ViewController.

```Objective-C
    - (UIViewController *)getCurrentVC

    {

        UIViewController *result = nil;

        

        UIWindow * window = [[UIApplication sharedApplication] keyWindow];

        if (window.windowLevel != UIWindowLevelNormal)

        {

            NSArray *windows = [[UIApplication sharedApplication] windows];

            for(UIWindow * tmpWin in windows)

            {

                if (tmpWin.windowLevel == UIWindowLevelNormal)

                {

                    window = tmpWin;

                    break;

                }

            }

        }

        

        UIView *frontView = [[window subviews] objectAtIndex:0];

        id nextResponder = [frontView nextResponder];

        

        if ([nextResponder isKindOfClass:[UIViewController class]])

            result = nextResponder;

        else

            result = window.rootViewController;

        

        return result;

    }
```