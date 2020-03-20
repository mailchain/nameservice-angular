import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelpersAngularService } from '@mailchain/http-helpers-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameserviceAngularService {
  private url: string
  private protocol: string

  constructor(
    private http: HttpClient,
    private httpHelpersService: HttpHelpersAngularService,
  ) {
    this.initUrl()
  }

  /**
   * Initialize URL from local storage
   */
  initUrl() {
    this.url = `http://127.0.0.1:8080/api`
  }

  /**
   * Get address (e.g. 0x...) from name (e.g. alice.eth).
  * @param name the name to lookup
   */
  public resolveName(protocol, network, name) {
    var httpOptions = this.httpHelpersService.getHttpOptions([
      ['protocol', protocol],
      ['network', network],
    ])

    return this.http.get(
      this.url + `/nameservice/name/${name}/resolve`,
      httpOptions
    );
  };

  /**
   * Get name (e.g. alice.eth) from address (e.g. 0x...).
   * @param address the public address
   */
  public resolveAddress(protocol, network, address) {
    var httpOptions = this.httpHelpersService.getHttpOptions([
      ['protocol', protocol],
      ['network', network],
    ])

    return this.http.get(
      this.url + `/nameservice/address/${address}/resolve`,
      httpOptions
    );

  }

}

