export interface iLookupData {
    countries: iCountry[];
    provinces: iProvince[];
    cities: iCity[];
    courts: iCourt[];
}

export interface iCountry {
    vsd_name: string;
    vsd_countryid: string;
}

export interface iProvince {
    vsd_code: string;
    _vsd_countryid_value: string;
    vsd_name: string;
    vsd_provinceid: string;
}

export interface CitiesSearchResponse {
    Result: string;
    CityCollection: iCity[];
    CountryCollection: iCountry[];
    ProvinceCollection: iProvince[];
}


export interface iCity {
    _vsd_countryid_value: string;
    vsd_name: string;
    _vsd_stateid_value: string;
    vsd_cityid: string;
}

export interface iCourt {
    vsd_name: string;
    vsd_courtid: string;
}