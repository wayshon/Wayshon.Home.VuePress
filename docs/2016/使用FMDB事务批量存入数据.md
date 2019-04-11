## 使用FMDB事务批量存入数据
`2016-04-08`

在iOS编程中使用FMDB来存储数据，在inssert一大串对象时发现用了超过20秒，如果插入1000条数据，相当于进行了1000次磁盘存储。而使用事务之后相当于只执行一次sql语句，插入速度大大提升。

```Objective-C
    [[DBManager sharedDBManager].database beginTransaction];

    @try {

        for (NSString *sql in self.sqlArray) {

            [[DBManager sharedDBManager].database executeUpdate:sql];

        }

    }

    @catch (NSException *exception) {

        [[DBManager sharedDBManager].database rollback];

    }

    @finally {

        [[DBManager sharedDBManager].database commit];

        [self.sqlArray removeAllObjects];

        [[NSNotificationCenter defaultCenter]postNotificationName:@"updatePlan" object:nil];

    }
```