export interface IQuan {
    _id: string,
    TenQuan: string,
    Quan: string,
    ThanhPho: string,
    DatNuoc: string,
    MoTa: string,
    Image: string,
    Stat: string,
    Lat: number,
    Lng: number,
    Party: [
        {
            Leader: String,
            Title: String
        }
    ]

}