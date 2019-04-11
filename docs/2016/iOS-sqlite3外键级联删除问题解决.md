## iOS sqlite3外键级联删除问题解决
`2016-04-08`

最近学习使用数据库，以前上学的时候也学过外键和级联删除。
```Objective-C
    NSString *sql=@"CREATE TABLE PlanModel (Id integer,name text,constraint plan_key primary key (Id))";
    NSString *sql=@"CREATE TABLE SystemModel (Id integer,planId integer,name text,foreign key (planId) references PlanModel(Id) on delete cascade on update cascade,constraint system_key primary key (Id,planId))";
```
照理说在建表的时候sql语句如上面这段语句就行了，但是经过实验证明了并没有级联删除，即SystemModel中删除了，本表中关于PlanModel的id对应的纪录并没有删除。经过查阅发现，sqlite支持级联，但默认级联属性是关团的。
```Objective-C
    NSString *foreign=@"PRAGMA foreign_keys=1"
    [[DBManager sharedDBManager] executeNonQuery:foreign];
    NSString *sql=[NSString stringWithFormat:@"DELETE FROM PlanModel WHERE Id='%@'",model.Id];
    [[DBManager sharedDBManager] executeNonQuery:sql];
```
在执行删除的sql语句前先执行"PRAGMA foreign_keys=1"就可以了。