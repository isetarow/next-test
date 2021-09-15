import {Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from "@material-ui/core";
import Link from "next/link";
import EventIcon from "@material-ui/icons/Event";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import DescriptionIcon from "@material-ui/icons/Description";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";

const LinkList = () => {
    return (
        <>
            <List component="nav" aria-label="schedule management" subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    スケジュール管理
                </ListSubheader>
            }>
                <Link href="/bridalSchedule" passHref>
                    <ListItem button component="a">
                        <ListItemIcon>
                            <EventIcon/>
                        </ListItemIcon>
                        <ListItemText primary="ブライダル予定表参照"/>
                    </ListItem>
                </Link>
                <Link href="/registHoliday" passHref>
                    <ListItem button component="a">
                        <ListItemIcon>
                            <LocalHotelIcon/>
                        </ListItemIcon>
                        <ListItemText primary="休日登録"/>
                    </ListItem>
                </Link>
            </List>
            <Divider/>
            <List component="nav" aria-label="operation management" subheader={
                <ListSubheader component="div" id="operation-management-subheader">
                    運用管理
                </ListSubheader>
            }>
                <Link href="/showDetail" passHref>
                    <ListItem button component="a">
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>
                        <ListItemText primary="明細照会"/>
                    </ListItem>
                </Link>
                <Link href="/inputInvoice" passHref>
                    <ListItem button component="a">
                        <ListItemIcon>
                            <ReceiptIcon/>
                        </ListItemIcon>
                        <ListItemText primary="請求書入力"/>
                    </ListItem>
                </Link>
                <Link href="/changeParsonal" passHref>
                    <ListItem button component="a">
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="個人情報変更"/>
                    </ListItem>
                </Link>
            </List>
        </>
    )
}

export default LinkList