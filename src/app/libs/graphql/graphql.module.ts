import { NgModule } from "@angular/core";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";

@NgModule({
    imports: [
		HttpClientModule
    ],
    declarations: [],
    exports: [
        ApolloModule,
        HttpLinkModule,
    ]
})
export class GraphqlModule { 
    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink,
    ) {
        const rickandmortyAPI = httpLink.create({
            uri: environment.rickandmortyAPI,
            method: "POST",
        });
        apollo.create({
            link: rickandmortyAPI,
            cache: new InMemoryCache(),
        }, 'rickandmorty');
    }
}