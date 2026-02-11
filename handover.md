**PHASE 1**
OVERVIEW
########
The core infrastructure , security protocols and authentication bridge have been maded.
Everything is in place for UI development and data integration

TECH STACK
##########
-Framework: Next.js(App Route)
-Auth/Backend:Firebase SDK v10+
-Environment:Node.js(Debian, i.e kali, ubuntu, mint compatible)

SECURITY STANDARD
#################
To maintain system security already in place , all devs must follow the following:
-NEVER , and I mean NEVER hardcode API KEYS
-All client-side environments variables must have the suffix "NEXT_PUBLIC_.." eg, "NEXT_PUBLIC_API_KEY"
-Never commit .env.local else we are cooked , I will just flush and delete everything , it is currently in .gitignore , due to sys configs files and directories starting with . are not visible but are there guys

ROUTE GUARDING
##############
-Any page requiring authentication must be wrapped in `<ProtectedRoute/>`
component found in `app/components/` .
-usage:
```javascript
import protectedRoute from "../components/ProtectedRoute";
export default function MyPage(){
return<ProtectedRoute>{/*UI Code */}</ProtectedRoute>;
}````


if u dont use this wrapper the frontend won't communicate with the backend that i have configure

Any page that will need auth or db  must include "use client"; directive as the first line of code just like " #include<stdio.h>" in C

GOD SPEED BOYS , I WILL BE WAITING FOR YALL 

