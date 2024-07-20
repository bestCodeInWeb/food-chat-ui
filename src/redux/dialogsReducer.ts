import { Dialog } from "../components/layouts/Sidebar";

const SET_DIALOGS = 'SET_DIALOGS';
const ADD_DIALOG = 'ADD_DIALOG';
const REMOVE_DIALOG = 'REMOVE_DIALOG';
const UPDATE_DIALOG = 'UPDATE_DIALOG';
const SELECT_NAME = 'SELECT_NAME';

export const dialogsState: DialogsState = {
  items: [
    {
        "id": "hl255zxjx",
        "chatId": "chat5",
        "senderId": "qmsgyxm1j",
        "recipientId": "h5qa9s88l",
        "senderName": "Fixed User",
        "recipientName": "Recipient 0",
        "content": "Message content 0",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "afdwdmgig",
        "chatId": "ysbsg7r3u",
        "senderId": "5b8gcw6dg",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 1",
        "recipientName": "Fixed User",
        "content": "Message content 1",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "c6kus64k1",
        "chatId": "f0k1jlylf",
        "senderId": "qmsgyxm1j",
        "recipientId": "yuqnk9epe",
        "senderName": "Fixed User",
        "recipientName": "Recipient 2",
        "content": "Message content 2",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "f8rm9d2nf",
        "chatId": "le7qo71zh",
        "senderId": "qmsgyxm1j",
        "recipientId": "zlbo8ck3w",
        "senderName": "Fixed User",
        "recipientName": "Recipient 3",
        "content": "Message content 3",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "3dq80wt2b",
        "chatId": "sfmj2zsg0",
        "senderId": "abz6l4396",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 4",
        "recipientName": "Fixed User",
        "content": "Message content 4",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "v14skyigo",
        "chatId": "glcjrqc2f",
        "senderId": "el8si2gr5",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 5",
        "recipientName": "Fixed User",
        "content": "Message content 5",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "ptb3a3h0p",
        "chatId": "chat7",
        "senderId": "qmsgyxm1j",
        "recipientId": "67686n90q",
        "senderName": "Fixed User",
        "recipientName": "Recipient 6",
        "content": "Message content 6",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "m67ldsu30",
        "chatId": "chat1",
        "senderId": "snl78h73e",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 7",
        "recipientName": "Fixed User",
        "content": "Message content 7",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "y9z4ryy4r",
        "chatId": "7ch3v4k4u",
        "senderId": "qmsgyxm1j",
        "recipientId": "qfe23avjo",
        "senderName": "Fixed User",
        "recipientName": "Recipient 8",
        "content": "Message content 8",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "1m7ylfpeq",
        "chatId": "2as5stpit",
        "senderId": "olclm5sp2",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 9",
        "recipientName": "Fixed User",
        "content": "Message content 9",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "9r4j6ikne",
        "chatId": "chat9",
        "senderId": "qmsgyxm1j",
        "recipientId": "ed8y0gwc9",
        "senderName": "Fixed User",
        "recipientName": "Recipient 10",
        "content": "Message content 10",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "0oxdn4ptz",
        "chatId": "qzs93e8h1",
        "senderId": "helleqwig",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 11",
        "recipientName": "Fixed User",
        "content": "Message content 11",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "iym2lec5p",
        "chatId": "chat8",
        "senderId": "v2pvqghvf",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 12",
        "recipientName": "Fixed User",
        "content": "Message content 12",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "hgd5m62gs",
        "chatId": "chat2",
        "senderId": "qmsgyxm1j",
        "recipientId": "ofufn16bv",
        "senderName": "Fixed User",
        "recipientName": "Recipient 13",
        "content": "Message content 13",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "22f0k5s17",
        "chatId": "3lvhyuc2z",
        "senderId": "gzic1pr5y",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 14",
        "recipientName": "Fixed User",
        "content": "Message content 14",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "d9y3ylikn",
        "chatId": "u1zm7lzp0",
        "senderId": "et73eowq0",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 15",
        "recipientName": "Fixed User",
        "content": "Message content 15",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "pkibn27n5",
        "chatId": "w3rutrm5d",
        "senderId": "35rnkjrdc",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 16",
        "recipientName": "Fixed User",
        "content": "Message content 16",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "hv2nbwln3",
        "chatId": "chat4",
        "senderId": "qmsgyxm1j",
        "recipientId": "ddlgsv0xp",
        "senderName": "Fixed User",
        "recipientName": "Recipient 17",
        "content": "Message content 17",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "7wg48582x",
        "chatId": "5vq10blpq",
        "senderId": "qmsgyxm1j",
        "recipientId": "z7lhcw66d",
        "senderName": "Fixed User",
        "recipientName": "Recipient 18",
        "content": "Message content 18",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "2qelr3308",
        "chatId": "chat6",
        "senderId": "1nrtra71m",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 19",
        "recipientName": "Fixed User",
        "content": "Message content 19",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "tuuxedwo1",
        "chatId": "s6onzl4pa",
        "senderId": "qmsgyxm1j",
        "recipientId": "nr8wucoyk",
        "senderName": "Fixed User",
        "recipientName": "Recipient 20",
        "content": "Message content 20",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "25cryi3r8",
        "chatId": "chat2",
        "senderId": "y5t803578",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 21",
        "recipientName": "Fixed User",
        "content": "Message content 21",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "37vk1d20v",
        "chatId": "chat5",
        "senderId": "hm45tn7lc",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 22",
        "recipientName": "Fixed User",
        "content": "Message content 22",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "michvybkn",
        "chatId": "v21ygc7ie",
        "senderId": "sv1uc591l",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 23",
        "recipientName": "Fixed User",
        "content": "Message content 23",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "zji3zwjm5",
        "chatId": "chat2",
        "senderId": "cj8kmwtur",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 24",
        "recipientName": "Fixed User",
        "content": "Message content 24",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "00jeb66eg",
        "chatId": "chat7",
        "senderId": "zbapkoulc",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 25",
        "recipientName": "Fixed User",
        "content": "Message content 25",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "0wyk2x0j1",
        "chatId": "zk0d2n7ia",
        "senderId": "5sgvqoron",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 26",
        "recipientName": "Fixed User",
        "content": "Message content 26",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "gg14e6de8",
        "chatId": "0x5igew94",
        "senderId": "qmsgyxm1j",
        "recipientId": "rj538o8bl",
        "senderName": "Fixed User",
        "recipientName": "Recipient 27",
        "content": "Message content 27",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "d93gp5ngq",
        "chatId": "lqxcpwgno",
        "senderId": "v89sko2cv",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 28",
        "recipientName": "Fixed User",
        "content": "Message content 28",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "7q45ixh5t",
        "chatId": "yssmgbjwk",
        "senderId": "qmsgyxm1j",
        "recipientId": "lngghfw39",
        "senderName": "Fixed User",
        "recipientName": "Recipient 29",
        "content": "Message content 29",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "oz6fr8xbl",
        "chatId": "chat1",
        "senderId": "qmsgyxm1j",
        "recipientId": "8hirtz8vn",
        "senderName": "Fixed User",
        "recipientName": "Recipient 30",
        "content": "Message content 30",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "RECEIVED"
    },
    {
        "id": "4i7iizct7",
        "chatId": "chat5",
        "senderId": "j5a17543f",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 31",
        "recipientName": "Fixed User",
        "content": "Message content 31",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "tmd5j4dzq",
        "chatId": "pj3j13rm0",
        "senderId": "qmsgyxm1j",
        "recipientId": "x88tz6ufm",
        "senderName": "Fixed User",
        "recipientName": "Recipient 32",
        "content": "Message content 32",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "licd8t1sr",
        "chatId": "chat9",
        "senderId": "qmsgyxm1j",
        "recipientId": "3ksoudkoe",
        "senderName": "Fixed User",
        "recipientName": "Recipient 33",
        "content": "Message content 33",
        "timestamp": "2024-07-15T14:33:44.216Z",
        "status": "DELIVERED"
    },
    {
        "id": "7vzttjemz",
        "chatId": "8nemarz7i",
        "senderId": "qmsgyxm1j",
        "recipientId": "6wtzffzli",
        "senderName": "Fixed User",
        "recipientName": "Recipient 34",
        "content": "Message content 34",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "wc49c9ezo",
        "chatId": "chat2",
        "senderId": "xv189iz54",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 35",
        "recipientName": "Fixed User",
        "content": "Message content 35",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "o5eei3ys2",
        "chatId": "chat8",
        "senderId": "b97t3654r",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 36",
        "recipientName": "Fixed User",
        "content": "Message content 36",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "397fxrjdx",
        "chatId": "dwvdg2lit",
        "senderId": "qmsgyxm1j",
        "recipientId": "7x1yege5p",
        "senderName": "Fixed User",
        "recipientName": "Recipient 37",
        "content": "Message content 37",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "rars6nwjb",
        "chatId": "chat9",
        "senderId": "qmsgyxm1j",
        "recipientId": "fq7ilsopy",
        "senderName": "Fixed User",
        "recipientName": "Recipient 38",
        "content": "Message content 38",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "z5p8fyabr",
        "chatId": "chat7",
        "senderId": "y4f1vr8h9",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 39",
        "recipientName": "Fixed User",
        "content": "Message content 39",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "jtz97sm83",
        "chatId": "chat1",
        "senderId": "qmsgyxm1j",
        "recipientId": "egga7u19x",
        "senderName": "Fixed User",
        "recipientName": "Recipient 40",
        "content": "Message content 40",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "jnu4j8cd6",
        "chatId": "ckdr344we",
        "senderId": "8szr2qdcy",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 41",
        "recipientName": "Fixed User",
        "content": "Message content 41",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "m0xuc2c9t",
        "chatId": "9kmk5gftt",
        "senderId": "qmsgyxm1j",
        "recipientId": "bct8j68cz",
        "senderName": "Fixed User",
        "recipientName": "Recipient 42",
        "content": "Message content 42",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "hojv5rqm1",
        "chatId": "chat8",
        "senderId": "qmsgyxm1j",
        "recipientId": "yp98cgrvl",
        "senderName": "Fixed User",
        "recipientName": "Recipient 43",
        "content": "Message content 43",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "qwzg6pnp3",
        "chatId": "chat2",
        "senderId": "mnjchjzr0",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 44",
        "recipientName": "Fixed User",
        "content": "Message content 44",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "rkmglqf2o",
        "chatId": "djempl09k",
        "senderId": "qmsgyxm1j",
        "recipientId": "1h3uj8jpo",
        "senderName": "Fixed User",
        "recipientName": "Recipient 45",
        "content": "Message content 45",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "zfxjikahv",
        "chatId": "chat6",
        "senderId": "faim92y19",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 46",
        "recipientName": "Fixed User",
        "content": "Message content 46",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "a65jmqufy",
        "chatId": "16os6aceg",
        "senderId": "qmsgyxm1j",
        "recipientId": "09tkvzbat",
        "senderName": "Fixed User",
        "recipientName": "Recipient 47",
        "content": "Message content 47",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "hw2vrjxtw",
        "chatId": "chat7",
        "senderId": "qmsgyxm1j",
        "recipientId": "eln5xyuuu",
        "senderName": "Fixed User",
        "recipientName": "Recipient 48",
        "content": "Message content 48",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "fe4ph8g6f",
        "chatId": "chat2",
        "senderId": "9r14l0s2q",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 49",
        "recipientName": "Fixed User",
        "content": "Message content 49",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "6zuj0i8ku",
        "chatId": "chat7",
        "senderId": "qmsgyxm1j",
        "recipientId": "xp0t4r6fl",
        "senderName": "Fixed User",
        "recipientName": "Recipient 50",
        "content": "Message content 50",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "e0ff1mitw",
        "chatId": "chat6",
        "senderId": "qmsgyxm1j",
        "recipientId": "4oo4xzrno",
        "senderName": "Fixed User",
        "recipientName": "Recipient 51",
        "content": "Message content 51",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "ik36jvx9v",
        "chatId": "nlr1ewzzv",
        "senderId": "6vpibrm21",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 52",
        "recipientName": "Fixed User",
        "content": "Message content 52",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "p3ol2nqot",
        "chatId": "hj120x4th",
        "senderId": "qmsgyxm1j",
        "recipientId": "dbbfl3n4h",
        "senderName": "Fixed User",
        "recipientName": "Recipient 53",
        "content": "Message content 53",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "z6eqmovma",
        "chatId": "3u66s01uu",
        "senderId": "780o8920f",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 54",
        "recipientName": "Fixed User",
        "content": "Message content 54",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "1c026pj2v",
        "chatId": "chat0",
        "senderId": "fn1ohyjrk",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 55",
        "recipientName": "Fixed User",
        "content": "Message content 55",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "6cimf2k4j",
        "chatId": "346gy6py7",
        "senderId": "qmsgyxm1j",
        "recipientId": "simmwbqh2",
        "senderName": "Fixed User",
        "recipientName": "Recipient 56",
        "content": "Message content 56",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "u9kzzxy7y",
        "chatId": "chat5",
        "senderId": "3e9i39wnr",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 57",
        "recipientName": "Fixed User",
        "content": "Message content 57",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "tuk61vzj6",
        "chatId": "tj9grxy7i",
        "senderId": "knxn5eyp6",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 58",
        "recipientName": "Fixed User",
        "content": "Message content 58",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "kafxter8f",
        "chatId": "9d8p86dax",
        "senderId": "qmsgyxm1j",
        "recipientId": "80mfoeieh",
        "senderName": "Fixed User",
        "recipientName": "Recipient 59",
        "content": "Message content 59",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "guu3bthu2",
        "chatId": "cxlapkmbs",
        "senderId": "qmsgyxm1j",
        "recipientId": "fhzqyvmkv",
        "senderName": "Fixed User",
        "recipientName": "Recipient 60",
        "content": "Message content 60",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "ygfwz8jhs",
        "chatId": "chat1",
        "senderId": "qmsgyxm1j",
        "recipientId": "w9gvchkkk",
        "senderName": "Fixed User",
        "recipientName": "Recipient 61",
        "content": "Message content 61",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "1e2mkmtoz",
        "chatId": "wokvxnf2t",
        "senderId": "qmsgyxm1j",
        "recipientId": "0a7q7yu9r",
        "senderName": "Fixed User",
        "recipientName": "Recipient 62",
        "content": "Message content 62",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "sd57km616",
        "chatId": "chat5",
        "senderId": "frvx0a193",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 63",
        "recipientName": "Fixed User",
        "content": "Message content 63",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "4m794kz4t",
        "chatId": "chat2",
        "senderId": "qmsgyxm1j",
        "recipientId": "34ovq30kb",
        "senderName": "Fixed User",
        "recipientName": "Recipient 64",
        "content": "Message content 64",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "w0bdgwr4e",
        "chatId": "mep25vxsh",
        "senderId": "qmsgyxm1j",
        "recipientId": "5x3r5ek0p",
        "senderName": "Fixed User",
        "recipientName": "Recipient 65",
        "content": "Message content 65",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "dupgzhmgx",
        "chatId": "3awscjpdg",
        "senderId": "qmsgyxm1j",
        "recipientId": "l4ikjhcfg",
        "senderName": "Fixed User",
        "recipientName": "Recipient 66",
        "content": "Message content 66",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "gabxduwol",
        "chatId": "chat0",
        "senderId": "szlt1fs0s",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 67",
        "recipientName": "Fixed User",
        "content": "Message content 67",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "5iuanow7m",
        "chatId": "1muc5634d",
        "senderId": "tfap2tebd",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 68",
        "recipientName": "Fixed User",
        "content": "Message content 68",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "7sdf8g9bx",
        "chatId": "chat7",
        "senderId": "phaw2c2lz",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 69",
        "recipientName": "Fixed User",
        "content": "Message content 69",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "c2i1krolk",
        "chatId": "chat6",
        "senderId": "23f617ni4",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 70",
        "recipientName": "Fixed User",
        "content": "Message content 70",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "6w1r6a1zy",
        "chatId": "h9b8rsly5",
        "senderId": "qmsgyxm1j",
        "recipientId": "wzb45v8c7",
        "senderName": "Fixed User",
        "recipientName": "Recipient 71",
        "content": "Message content 71",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "t9htg9xsq",
        "chatId": "chat2",
        "senderId": "drcxcrt9r",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 72",
        "recipientName": "Fixed User",
        "content": "Message content 72",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "wyl9n1ro3",
        "chatId": "chat3",
        "senderId": "qmsgyxm1j",
        "recipientId": "swahths9e",
        "senderName": "Fixed User",
        "recipientName": "Recipient 73",
        "content": "Message content 73",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "9p6pyapgf",
        "chatId": "chat3",
        "senderId": "qmsgyxm1j",
        "recipientId": "85dkux873",
        "senderName": "Fixed User",
        "recipientName": "Recipient 74",
        "content": "Message content 74",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "2uwz9da3t",
        "chatId": "chat2",
        "senderId": "qmsgyxm1j",
        "recipientId": "4p2c7oaxr",
        "senderName": "Fixed User",
        "recipientName": "Recipient 75",
        "content": "Message content 75",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "f3y7nb4h6",
        "chatId": "chat7",
        "senderId": "inppw5nhq",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 76",
        "recipientName": "Fixed User",
        "content": "Message content 76",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "rshq0i97g",
        "chatId": "chat3",
        "senderId": "i8qk4ecpu",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 77",
        "recipientName": "Fixed User",
        "content": "Message content 77",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "d6r539u3z",
        "chatId": "iv8005ytn",
        "senderId": "qmsgyxm1j",
        "recipientId": "adqcpkmjo",
        "senderName": "Fixed User",
        "recipientName": "Recipient 78",
        "content": "Message content 78",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "7bwwkw2nm",
        "chatId": "chat2",
        "senderId": "luvhpo3uu",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 79",
        "recipientName": "Fixed User",
        "content": "Message content 79",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "7fjk6ki3g",
        "chatId": "chat8",
        "senderId": "qmsgyxm1j",
        "recipientId": "awwyax365",
        "senderName": "Fixed User",
        "recipientName": "Recipient 80",
        "content": "Message content 80",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "znsudh4d7",
        "chatId": "chat4",
        "senderId": "3r6wa069f",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 81",
        "recipientName": "Fixed User",
        "content": "Message content 81",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "22yfyp30l",
        "chatId": "jz46m6r4k",
        "senderId": "sgxivyd3z",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 82",
        "recipientName": "Fixed User",
        "content": "Message content 82",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "5aei2sqwu",
        "chatId": "chat1",
        "senderId": "0l3xhtoco",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 83",
        "recipientName": "Fixed User",
        "content": "Message content 83",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "mfwf9b5rm",
        "chatId": "chat2",
        "senderId": "qmsgyxm1j",
        "recipientId": "ybxl70xhw",
        "senderName": "Fixed User",
        "recipientName": "Recipient 84",
        "content": "Message content 84",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "vx99d2lmt",
        "chatId": "jam79ui8r",
        "senderId": "qmsgyxm1j",
        "recipientId": "zynbyr4wm",
        "senderName": "Fixed User",
        "recipientName": "Recipient 85",
        "content": "Message content 85",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "zghbs54kb",
        "chatId": "chat9",
        "senderId": "qmsgyxm1j",
        "recipientId": "me8akjzz2",
        "senderName": "Fixed User",
        "recipientName": "Recipient 86",
        "content": "Message content 86",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "y0n1gjf6v",
        "chatId": "chat8",
        "senderId": "qmsgyxm1j",
        "recipientId": "w1m0a47ge",
        "senderName": "Fixed User",
        "recipientName": "Recipient 87",
        "content": "Message content 87",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "udm9nrklq",
        "chatId": "y9fwhg6k5",
        "senderId": "qmsgyxm1j",
        "recipientId": "u4uyi8gbg",
        "senderName": "Fixed User",
        "recipientName": "Recipient 88",
        "content": "Message content 88",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "qo4j1ohe6",
        "chatId": "chat7",
        "senderId": "qmsgyxm1j",
        "recipientId": "t8xgyyt8p",
        "senderName": "Fixed User",
        "recipientName": "Recipient 89",
        "content": "Message content 89",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "96b69inno",
        "chatId": "8pazbjk2o",
        "senderId": "qmsgyxm1j",
        "recipientId": "dttxviy6f",
        "senderName": "Fixed User",
        "recipientName": "Recipient 90",
        "content": "Message content 90",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "ltxolq0v7",
        "chatId": "chat2",
        "senderId": "6hpnoklpw",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 91",
        "recipientName": "Fixed User",
        "content": "Message content 91",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "x7bqx40tv",
        "chatId": "chat7",
        "senderId": "ljhulufpg",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 92",
        "recipientName": "Fixed User",
        "content": "Message content 92",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "pg02bvk6g",
        "chatId": "a4q4dsbxp",
        "senderId": "qmsgyxm1j",
        "recipientId": "l5816jhyu",
        "senderName": "Fixed User",
        "recipientName": "Recipient 93",
        "content": "Message content 93",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "9jwsbb0mp",
        "chatId": "r5zer4zmb",
        "senderId": "qmsgyxm1j",
        "recipientId": "8fza88llo",
        "senderName": "Fixed User",
        "recipientName": "Recipient 94",
        "content": "Message content 94",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "ttbxmw7di",
        "chatId": "yr6aemfgg",
        "senderId": "vv3mnwme2",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 95",
        "recipientName": "Fixed User",
        "content": "Message content 95",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "46q76jac8",
        "chatId": "chat8",
        "senderId": "qmsgyxm1j",
        "recipientId": "ff2da35nr",
        "senderName": "Fixed User",
        "recipientName": "Recipient 96",
        "content": "Message content 96",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "2lf8cxefh",
        "chatId": "chat1",
        "senderId": "kn1f1japi",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 97",
        "recipientName": "Fixed User",
        "content": "Message content 97",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    },
    {
        "id": "rfn64tipt",
        "chatId": "p05xpglfg",
        "senderId": "qmsgyxm1j",
        "recipientId": "d3qnyzvm9",
        "senderName": "Fixed User",
        "recipientName": "Recipient 98",
        "content": "Message content 98",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "DELIVERED"
    },
    {
        "id": "36mkan45l",
        "chatId": "jbrmfczrm",
        "senderId": "9k8o37wf1",
        "recipientId": "qmsgyxm1j",
        "senderName": "Sender 99",
        "recipientName": "Fixed User",
        "content": "Message content 99",
        "timestamp": "2024-07-15T14:33:44.217Z",
        "status": "RECEIVED"
    }
],
  selectedName: ''
};

type DialogsState = {
  items: Dialog[];
  selectedName: string;
};

const dialogsReducer = (
  state = dialogsState,
  action: ActionTypes,
): DialogsState => {
  switch (action.type) {
    case SET_DIALOGS: 
      return {
        ...state,
        items: action.payload
      }
    case ADD_DIALOG: 
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case REMOVE_DIALOG: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case UPDATE_DIALOG: 
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
      }
    case SELECT_NAME: 
      return {
        ...state,
        selectedName: action.payload
      }
  
    default:
      break;
  }
  return state;
}

//action creators
export const setDialogs = (dialogs: Dialog[]): SetDialogs => {
  return {
    type: SET_DIALOGS,
    payload: dialogs,
  }
}

export const addMessage = (message: Dialog): AddMessage => {
  return {
    type: ADD_DIALOG,
    payload: message
  }
}

export const remoaveMessage = (id: string): RemoveDialog => {
  return {
    type: REMOVE_DIALOG,
    payload: id
  }
}

export const updateDialog = (dialog: Dialog): UpdateDialog => {
  return {
    type: UPDATE_DIALOG,
    payload: dialog
  }
}

export const selectName = (name: string): SelectName => {
  return {
    type: SELECT_NAME,
    payload: name
  }
}

type SetDialogs = {
  type: typeof SET_DIALOGS;
  payload: Dialog[];
}

type AddMessage = {
  type: typeof ADD_DIALOG;
  payload: Dialog;
}

type RemoveDialog = {
  type: typeof REMOVE_DIALOG;
  payload: string;
}

type UpdateDialog = {
  type: typeof UPDATE_DIALOG;
  payload: Dialog
}

type SelectName = {
  type: typeof SELECT_NAME;
  payload: string;
}

type ActionTypes =
  | SetDialogs
  | AddMessage
  | RemoveDialog
  | UpdateDialog
  | SelectName;

export default dialogsReducer;
