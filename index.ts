import CryptoJS from "crypto-js"
import dayjs from "dayjs";;
var secreetKey = "KelasPintarBisa"

const decript = (data: any) => {
    var replace = data?.replace(/Por21Ld/g, "/")
    var replace2 = replace?.replace(/Por21Le/g, "+")
    var bytes = CryptoJS.AES.decrypt(replace2, secreetKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
const encript = (data: any) => {
    var id = CryptoJS.AES.encrypt(data, secreetKey).toString()
    var replace = id.replace(/\//g, "Por21Ld")
    var replace2 = replace.replace(/\+/g, "Por21Le")
    return replace2
}
function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts: any | undefined = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const makeId = (length: number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const textOrNumber = (str: any) => {
    let letters = 0;
    let numbers = 0;
    for (let i = 0; i < str.length; i++) {
        if (typeof str[i] === 'string' && !isNaN(str[i])) {
            numbers++;
        } else if (typeof str[i] === 'string' && isNaN(str[i])) {
            letters++;
        }
    }
    return {
        text: letters,
        number: numbers
    };
}
const replaceToCountryCodeNumber = (str: any) => {
    let tmp = (str || " ").substr(0, 1) === "0" ? "+62" + str.substr(1, str.length - 1) : str;
    return tmp;
}
const showDayName = (date: Date) => {
    return dayjs(date).locale('id').format('dddd, D MMMM YYYY')
}
const showDayTimeName = (date: Date) => {
    return dayjs(date).locale('id').format('dddd, D MMMM YYYY HH:MM')
}

const encryptMD5 = (data: string) => {
    var encryptedData = CryptoJS.MD5(data).toString();
    return encryptedData;
}

const regex = /(\+62)(0{1,3})/g;

const validatePhoneNumber = (phoneNumber: string) => {
    return (phoneNumber || "").replace(/\s+/g, "").replace(regex, "$1");
}
function formatStringToDate(date: string) {
    var split = date.split('-')
    return `${split[2]}-${split[1]}-${split[0]}`
}

function formatDate(date: any, sparator = "-") {
    var date: any = new Date(date)
    var tanggal = date.getDate()
    var bulan = date.getMonth() + 1
    var tahun = date.getFullYear()
    if (sparator) {
        return `${tanggal < 10 ? `0${tanggal}` : tanggal}${sparator}${bulan < 10 ? `0${bulan}` : bulan}${sparator}${tahun}`
    }
    else {
        return `${tanggal < 10 ? `0${tanggal}` : tanggal}${sparator}${bulan < 10 ? `0${bulan}` : bulan}${sparator}${tahun}`
    }
}
function removeTime(date: string) {
    if (date) {
        var split = date.split(' ')
        return `${split[0]}`
    }
    else {
        return "-"
    }
}
const showStatus = (iddata: any) => {
    switch (`${iddata}`) {
        case '1':
            return 'BELUM MENIKAH'
        case '2':
            return 'MENIKAH'
        case '3':
            return 'JANDA'
        case '4':
            return 'DUDA'
        case '5':
            return 'CERAI HIDUP'
        case '6':
            return 'CERAI MATI'
        default:
            return '-'
    }
}
const showAgama = (iddata: any) => {
    switch (`${iddata}`) {
        case '1':
            return 'ISLAM'
        case '2':
            return 'KRISTEN PROTESTAN'
        case '3':
            return 'KRISTEN KATOLIK'
        case '4':
            return 'BUDHA'
        case '5':
            return 'HINDU'
        case '6':
            return 'LAIN - LAIN'
        case '-1':
            return 'NONE'
        default:
            return 'NONE'
    }
}
const numberFormat = (no: number) => {
    if (no < 0) {
        return `(${new Intl.NumberFormat().format(Math.abs(no))})`
    }
    else {
        return new Intl.NumberFormat().format(no)
    }
}
const showLinkDocument = (mainUrl: string, tipe: any, iddata: any) => {
    switch (tipe) {
        case 'kodeEtik':
            var tujuan = "kode_etik"
            break;
        case 'npwp':
            var tujuan = "npwp"
            break;
        case 'ktp':
            var tujuan = "ktp"
            break;
        case 'kontrakKerja':
            var tujuan = "ringkasan_kontrak_kerja"
            break;
        case 'signature':
            var tujuan = "signature"
            break;
        case 'profile':
            var tujuan = "profile"
            break;
        case 'rekening':
            var tujuan = "rekening"
            break;
        case 'formBo':
            var tujuan = "form_bo"
            break;
        case 'ktpPasasangan':
            var tujuan = "ktp_pasangan"
            break;
        case 'suratResign':
            var tujuan = "surat_resign"
            break;
        case 'suratResignGenerated':
            var tujuan = "surat_resign_orion"
            break;
        case 'twisting':
            var tujuan = "twisting"
            break;
        case 'suratKeterangan':
            var tujuan = "surat_keterangan"
            break;
        case 'suratKeteranganGenerated':
            var tujuan = "surat_keterangan_orion"
            break;
        case 'suratKeagenan':
            var tujuan = "surat_keagenan"
            break;
        case 'kontrakKerjaBp':
            var tujuan = "ringkasan_kontrak_kerjaBp"
            break;
        case 'formAgent':
            var tujuan = "form_agent"
            break;
        case 'reviewForm':
            var tujuan = "review_form"
            break;
        case 'kartuKeluarga':
            var tujuan = "kartu_keluarga"
            break;
        case 'twistingGenerated':
            var tujuan = "twisting_orion"
            break;
        case 'kodeEtikSyariah':
            var tujuan = "kode_etik_syariah"
            break;
        case 'kontrakKerjaSyariah':
            var tujuan = "ringkasan_kontrak_kerja_syariah"
            break;
        case 'kontrakKerjaBpSyariah':
            var tujuan = "ringkasan_kontrak_kerjaBp_syariah"
            break;

        default:
            var tujuan = "profile"
            break;
    }
    var url = `${mainUrl}/andromeda-onboarding/calon-agent/file/${tujuan}/${iddata}`
    return url
}
const showLinkDocumentOrionAssistant = (mainUrl: string, tipe: any, iddata: any) => {
    switch (tipe) {
        case 'KTP CALON ASSISTANT':
            var tujuan = "ktp"
            break;
        case 'KK CALON ASSISTANT':
            var tujuan = "kk"
            break;
        case 'PROFILE CALON ASSISTANT':
            var tujuan = "profile"
            break;

        default:
            var tujuan = "profile"
            break;
    }
    var url = `${mainUrl}/andromeda-orionassistance/api/v1/candidate-document/orion/view/${tujuan}/${iddata}`
    return url
}

function dateToPostString(dateStr: string) {
    const [day, month, year] = dateStr.split("-");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;

}

function dateToPost(data: any) {
    var date = new Date(data)
    var tahun = date.getFullYear()
    var bulan = date.getMonth() + 1
    var tanggal = date.getDate()
    return `${tahun}-${bulan < 10 ? '0' + bulan : bulan}-${tanggal < 10 ? '0' + tanggal : tanggal}`
}
function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
function formatDateTime(date: string) {
    var split = date?.split('T')
    var jam = split[1]?.split(":")
    return `${formatDate(split[0])}  ${jam[0]}:${jam[1]}`
}
const getNameById = (list: any, id: any) => {
    var cek = list.filter((e: any) => e.value == id)
    return cek[0].label
}

const numberFormatInput = (e: any) => {
    const inputNumber = e.replace(/\D/g, ''); // Menghapus karakter selain angka
    const formattedNumber = numberFormat(inputNumber);
    return formattedNumber
};
const resetFormatInput = (e: any) => {
    const inputNumber = e.replace(/\D/g, ''); // Menghapus karakter selain angka
    return inputNumber
};

type PropsDownload = {
    url: string;
    fileName: string;
    callback?: () => void,
    pdf?: boolean,
    callbackResponse?: (e: any) => void,
}
async function downloadFile({ fileName, url, callback, callbackResponse, pdf = false }: PropsDownload) {
    try {
        var urlDownload: string
        if (pdf) {
            urlDownload = "/api/file/pdf-compslip"
        }
        else {
            urlDownload = '/api/file'
        }
        const response = await fetch(urlDownload, { method: 'POST', body: JSON.stringify({ url: url }) });
        if (callbackResponse) {
            callbackResponse(response)
        }
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const fileBlob = await response.blob();
        const blobURL = URL.createObjectURL(fileBlob);
        const a = document.createElement('a');
        a.href = blobURL;
        a.download = fileName
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(blobURL);
        if (callback) {
            callback()
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const cekProperty = (obj: any, nameKey: string) => {
    if (!obj.hasOwnProperty(nameKey)) {
        return true
    }
    return false
}
function sumAmt(array: any[], keyName: string) {
    let totalAmt = 0;

    array.forEach(item => {
        const amtMatch = item[keyName].match(/\(([^)]+)\)/); // Mencocokkan angka di dalam kurung
        if (amtMatch) {
            const amtValue = Number(amtMatch[1].replace(/[^\d.-]/g, '')); // Menghapus karakter non-digit, dan mengonversi ke angka
            totalAmt -= isNaN(amtValue) ? 0 : amtValue; // Mengurangkan nilai jika ada
        } else {
            const amt = Number(item[keyName].replace(/[^\d.-]/g, '')); // Menghapus karakter non-digit, dan mengonversi ke angka
            totalAmt += isNaN(amt) ? 0 : amt;
        }
    });

    return totalAmt;
}

const filterByKey = (list: any, keyName: any, value: string) => {
    var cek = list.filter((e: any) => e[keyName] == value)
    return cek
}
const filterByKeyMore = (list: any, keyName: any, value: string) => {
    var cek = list.filter((e: any) => e[keyName] >= value)
    return cek
}

const getValueTotal = (list: any[], keyName: string, param: string) => {
    return list.find((e: any) => e[keyName] == param)
}

const getBulan = (tanggalIndo: string) => {
    switch (tanggalIndo) {
        case "01":
        case "1":
            return "Januari"
        case "02":
        case "2":
            return "Februari"
        case "03":
        case "3":
            return "Maret"
        case "04":
        case "4":
            return "April"
        case "05":
        case "5":
            return "Mei"
        case "06":
        case "6":
            return "Juni"
        case "07":
        case "7":
            return "Juli"
        case "08":
        case "8":
            return "Agustus"
        case "09":
        case "9":
            return "September"
        case "10":
            return "Oktober"
        case "11":
            return "November"
        case "12":
            return "Desember"

        default:
            return ""
    }
}

const isGrandTotal = (detail: any) => {
    if (detail) {
        if (detail.hasOwnProperty('grandTotal')) {
            return true
        }
        return false
    }
}
const isPeriodProduksi = (detail: any) => {
    if (detail) {
        if (detail.hasOwnProperty('periodeProduksi')) {
            return true
        }
        return false
    }
}
const fileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const base64String = e.target?.result?.toString().split(",")[1];
        return await base64String;
    };
    reader.readAsDataURL(file);
}

const encriptAES = (data: any) => {
    var dataEncripted = CryptoJS.AES.encrypt(JSON.stringify(data), 'gantengbanget').toString();
    return dataEncripted
}

const decriptAES = (data: string) => {
    var bytes = CryptoJS.AES.decrypt(data, 'gantengbanget');
    var dataDecripted = bytes.toString(CryptoJS.enc.Utf8);
    return dataDecripted
}

function getFileExtension(filename: string, isGetName: boolean = false) {
    const index = filename.lastIndexOf('.');
    if (isGetName) {

        return filename.substring(0, index)
    }
    else {
        return index > 0 ? filename.slice(index + 1) : '';
    }

}

function deleteAfterDot(val: string | number | null | undefined): string {
    if (val == null) return "";
    const s = String(val);
    // remove dot and everything after it
    return s.replace(/\..*$/, "");
}


export {
    decriptAES,
    encriptAES,
    showLinkDocumentOrionAssistant,
    fileToBase64,
    isPeriodProduksi,
    isGrandTotal,
    getBulan,
    numberFormat,
    getCookie,
    makeId,
    decript,
    encript,
    textOrNumber,
    replaceToCountryCodeNumber,
    showDayName,
    encryptMD5,
    showDayTimeName,
    validatePhoneNumber,
    formatDate,
    showAgama,
    showStatus,
    showLinkDocument,
    dateToPost,
    randomString,
    formatDateTime,
    formatStringToDate,
    getNameById,
    numberFormatInput,
    resetFormatInput,
    downloadFile,
    cekProperty,
    filterByKey,
    sumAmt,
    filterByKeyMore,
    getValueTotal,
    removeTime,
    getFileExtension,
    dateToPostString,
    deleteAfterDot
}
