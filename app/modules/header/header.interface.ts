export interface HeaderInterface {
 school_name:string,
 nav_menu:menu_item[],
 account_menu:{account_id:string}
}

export interface menu_item {
    link_name:string,
    link_url:string    
}