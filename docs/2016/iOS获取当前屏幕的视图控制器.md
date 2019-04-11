## iOS获取当前屏幕的视图控制器
`2016-04-11`

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