import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import { useAuth } from "@clerk/react";


// naka sync na ang user sa Sentry, so kung may error na mangyari, makikita mo kung sino ang user na nag trigger ng error
export function SentryUserSync() {
    const {isLoaded, userId} = useAuth();


    useEffect(() => {
        if (!isLoaded) return;
        Sentry.setUser(userId ? { id: userId } : null);
    },[isLoaded, userId]);

    return null;

}

