import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): 
        Observable<HttpEvent<any>> {
            req = req.clone({
                setHeaders: {
                    'X-RapidAPI-Key': 'fc5a637ffamsh7bf6722233daa2ap108ba4jsnb269231eed5c',
                    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'

                },
                setParams: {
                    key: '60b8b219f4474349b54bb3cfe1c40391',
                }
            });
            return next.handle(req);
        
    }

}