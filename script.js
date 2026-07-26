/**
 * RIZKI TOOLS - CORE ENGINE SCRIPT (Vanilla JS Modular Architecture)
 * Engine for 22 Generator APIs, Web Audio Feedback, Dynamic Modals & Custom Downloads.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi Aplikasi Utama
    RizkiToolsApp.init();
});

const API_KEY = 'cmnty-779b4d0f2bd20fbd9ce8b44be23f9436';
const BASE_DOMAIN = 'https://api.cmnty.biz.id';

/**
 * Daftar Master Tools (22 Tool Konfigurasi Lengkap)
 */
const TOOLS_CONFIG = [
    {
        id: 'brat',
        name: 'Brat Text',
        desc: 'Ubah teks menjadi gambar dengan gaya BRAT (generatif dan bergaya meme/kreatif). Masukkan teks yang ingin dijadikan gambar..',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14c1.2 2 2.6 3 4 3s2.8-1 4-3"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks Brat...' }],
        endpoint: (data) => `https://api-faa.my.id/faa/brat?text=${formatParam(data.text)}`,
        type: 'image'
    },
    {
        id: 'bratvid',
        name: 'Bratvid',
        desc: 'Buat animasi Teks Brat GIF ketik secara cepat.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks Brat GIF...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratvid?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'gif'
    },
    {
        id: 'bratwowo',
        name: 'Brat Prabowo',
        desc: 'Generator Teks khas Prabowo Subianto.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratwowo?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'bratbahlil',
        name: 'Brat Bahlil',
        desc: 'Generator Teks ala gaya khas Bahlil Lahadalia.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratbahlil?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'bratmegawati',
        name: 'Brat Megawati',
        desc: 'Generator Teks gaya khas Megawati Soekarnoputri.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratmegawati?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'bratsinchan',
        name: 'Brat Sinchan',
        desc: 'Generator Teks lucu bertema karakter Sinchan.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratsinchan?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'brathellokitty',
        name: 'Brat Hello Kitty',
        desc: 'Generator Teks dengan estetika Hello Kitty.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/brathellokitty?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'bratdoraemon',
        name: 'Brat Doraemon',
        desc: 'Generator Teks imut bertema Doraemon.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratdoraemon?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'bratbearnad',
        name: 'Brat Bearnad',
        desc: 'Generator Teks bertema Bernard Bear.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan teks...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/bratbearnad?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'notifwa',
        name: 'Fake Notifikasi WA',
        desc: 'Buat screenshot palsu notifikasi WhatsApp.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'name', label: 'Nama Pengirim', type: 'text', placeholder: 'Contoh: Rizki' },
            { name: 'message', label: 'Pesan Notifikasi', type: 'text', placeholder: 'Contoh: Halo bos, project selesai!' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/notifwa?name=${formatParam(data.name)}&message=${formatParam(data.message)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'notifwav2',
        name: 'Fake Notifikasi WA V2',
        desc: 'Notifikasi WhatsApp versi 2 dengan Foto Profil Avatar.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'avatar', label: 'URL Avatar / Foto', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' },
            { name: 'name', label: 'Nama Pengirim', type: 'text', placeholder: 'Contoh: Bos Rizki' },
            { name: 'message', label: 'Pesan', type: 'text', placeholder: 'Contoh: Siap jalankan server.' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/notifwav2?avatar=${encodeURIComponent(data.avatar)}&name=${formatParam(data.name)}&message=${formatParam(data.message)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'tiktokcomment',
        name: 'Fake Komentar TikTok',
        desc: 'Buat tangkapan layar komentar TikTok persis aslinya.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'avatar', label: 'URL Foto Profil', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' },
            { name: 'comment', label: 'Komentar', type: 'text', placeholder: 'Menyala bosku! 🔥' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/tiktok-comment?avatar=${encodeURIComponent(data.avatar)}&comment=${formatParam(data.comment)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'tiktokquotes',
        name: 'Kutipan TikTok',
        desc: 'Ubah pesan menjadi kutipan estetis khas TikTok.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'avatar', label: 'URL Foto Profil', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' },
            { name: 'quote', label: 'Kata-Kata / Quotes', type: 'text', placeholder: 'Fokus pada proses, bukan pujian.' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/tiktok-quotes?avatar=${encodeURIComponent(data.avatar)}&quote=${formatParam(data.quote)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'wmpmeme',
        name: 'WMP Meme Generator',
        desc: 'Generator meme WMP cepat dan tajam.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks Meme', type: 'text', placeholder: 'Masukan teks meme...' }],
        endpoint: (data) => `https://apii.nexadev.my.id/wmp1?text=${encodeURIComponent(data.text)}`,
        type: 'image'
    },
    {
        id: 'pakustadz',
        name: 'Pak Ustadz Meme',
        desc: 'Buat meme nasehat bijak Pak Ustadz.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Nasehat Teks', type: 'text', placeholder: 'Ingat bos, utamakan sholat...' }],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/ustadz?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'narutotext',
        name: 'Teks Naruto',
        desc: 'Generator logo teks bergaya Anime Naruto.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukan nama / teks Naruto...' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/naruto?text=${formatParam(data.text)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'pornhubtext',
        name: 'Teks Pornhub',
        desc: 'Generator logo ikonik gaya Pornhub (Hitam & Oranye).',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'text1', label: 'Teks Depan (Putih)', type: 'text', placeholder: 'Rizki' },
            { name: 'text2', label: 'Teks Belakang (Oranye)', type: 'text', placeholder: 'Tools' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/pornhub?text1=${formatParam(data.text1)}&text2=${formatParam(data.text2)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'removebg',
        name: 'Hapus Background',
        desc: 'Hapus latar belakang gambar secara otomatis.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'url', label: 'URL Gambar Utama', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' }],
        endpoint: (data) => `${BASE_DOMAIN}/tools/removebg?url=${encodeURIComponent(data.url)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'blurface',
        name: 'Wajah Buram',
        desc: 'Sensor otomatis wajah pada gambar secara privat.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'url', label: 'URL Gambar Wajah', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' }],
        endpoint: (data) => `https://api-faa.my.id/faa/blurwajah?image=${encodeURIComponent(data.url)}`,
        type: 'image'
    },
    {
        id: 'fakeml',
        name: 'Lobi Mobile Legends',
        desc: 'Generator pratinjau Lobi Profil Mobile Legends Fake.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'usr', label: 'Nickname Player', type: 'text', placeholder: 'Rizki_Pro' },
            { 
                name: 'rank', 
                label: 'Rank Mobile Legends', 
                type: 'select', 
                options: ["warrior", "elite", "master", "gmaster", "epic", "legend", "mythic", "honor", "glory", "imo"]
            },
            { name: 'avatar', label: 'URL Foto Profil', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/maker/fake-ml?usr=${formatParam(data.usr)}&rank=${formatParam(data.rank)}&border=random&lobby_type=indo&avatar=${encodeURIComponent(data.avatar)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'fakeff',
        name: 'Lobi Free Fire',
        desc: 'Buat tampilan Lobi Profil Free Fire palsu.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [{ name: 'usr', label: 'Nickname FF', type: 'text', placeholder: 'Rizki_FF' }],
        endpoint: (data) => `${BASE_DOMAIN}/maker/fake-ff?usr=${formatParam(data.usr)}&apikey=${API_KEY}`,
        type: 'image'
    },
    {
        id: 'buatektp',
        name: 'Buat KTP Generator',
        desc: 'Generator E-KTP Indonesia lengkap untuk kebutuhan visual.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="0.7" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.7" fill="currentColor" stroke="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>',
        inputs: [
            { name: 'provinsi', label: 'Provinsi', type: 'text', placeholder: 'JAWA BARAT' },
            { name: 'kota', label: 'Kota / Kabupaten', type: 'text', placeholder: 'KOTA CIREBON' },
            { name: 'nik', label: 'NIK (16 Digit)', type: 'text', placeholder: '3274012345670001' },
            { name: 'nama', label: 'Nama Lengkap', type: 'text', placeholder: 'RIZKI' },
            { name: 'ttl', label: 'Tempat, Tanggal Lahir', type: 'text', placeholder: 'CIREBON, 01-01-2000' },
            { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'text', placeholder: 'LAKI-LAKI' },
            { name: 'golongan', label: 'Golongan Darah', type: 'text', placeholder: 'O' },
            { name: 'alamat', label: 'Alamat', type: 'text', placeholder: 'JL. MERDEKA NO. 45' },
            { name: 'rt_rw', label: 'RT / RW', type: 'text', placeholder: '001/002' },
            { name: 'kelurahan', label: 'Kelurahan / Desa', type: 'text', placeholder: 'KEJAKSAN' },
            { name: 'kecamatan', label: 'Kecamatan', type: 'text', placeholder: 'KEJAKSAN' },
            { name: 'agama', label: 'Agama', type: 'text', placeholder: 'ISLAM' },
            { name: 'status', label: 'Status Perkawinan', type: 'text', placeholder: 'BELUM KAWIN' },
            { name: 'pekerjaan', label: 'Pekerjaan', type: 'text', placeholder: 'SOFTWARE ENGINEER' },
            { name: 'tanggal', label: 'Tanggal Terbuat', type: 'text', placeholder: '14-07-2024' },
            { name: 'pas_photo', label: 'URL Pas Foto 3x4', type: 'url', placeholder: 'https://i.ibb.co/sample.jpg' }
        ],
        endpoint: (data) => `${BASE_DOMAIN}/canvas/ektp?provinsi=${formatParam(data.provinsi)}&kota=${formatParam(data.kota)}&nik=${formatParam(data.nik)}&nama=${formatParam(data.nama)}&ttl=${formatParam(data.ttl)}&jenis_kelamin=${formatParam(data.jenis_kelamin)}&golongan_darah=${formatParam(data.golongan)}&alamat=${formatParam(data.alamat)}&rt%2Frw=${formatParam(data.rt_rw)}&kel%2Fdesa=${formatParam(data.kelurahan)}&kecamatan=${formatParam(data.kecamatan)}&agama=${formatParam(data.agama)}&status=${formatParam(data.status)}&pekerjaan=${formatParam(data.pekerjaan)}&kewarganegaraan=WNI&masa_berlaku=Seumur+Hidup&terbuat=${formatParam(data.tanggal)}&pas_photo=${encodeURIComponent(data.pas_photo)}&apikey=${API_KEY}`,
        type: 'image'
    }
];

/**
 * Helper Formatting Parameter Khusus Domain api.cmnty.biz.id
 * Mengubah spasi menjadi tanda + sesuai spesifikasi prompt.
 */
function formatParam(value) {
    if (!value) return '';
    return encodeURIComponent(value).replace(/%20/g, '+');
}

/**
 * RizkiTools Application Controller
 */
const RizkiToolsApp = {
    activeTool: null,
    generatedUrl: null,

    init() {
        this.renderBackgroundCanvas();
        this.renderToolsGrid(TOOLS_CONFIG);
        this.bindEvents();
        this.setupAudio();
    },

    // Audio Click Synthesizer & Element Handler
    setupAudio() {
        this.audioEl = document.getElementById('audioClick');
        // Web Audio Synthesizer sebagai Fallback audio instant
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    },

    playClickSound() {
        if (this.audioEl && this.audioEl.readyState >= 2) {
            this.audioEl.currentTime = 0;
            this.audioEl.play().catch(() => this.playSynthSound());
        } else {
            this.playSynthSound();
        }
    },

    playSynthSound() {
        try {
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + 0.05);
        } catch (e) {
            // Silence if audio context restricted
        }
    },

    // Render Grid Cards Tools
    renderToolsGrid(tools) {
        const grid = document.getElementById('toolsGrid');
        grid.innerHTML = '';

        tools.forEach((tool) => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.setAttribute('data-id', tool.id);

            card.innerHTML = `
                <div>
                    <div class="card-icon-wrap">${tool.icon}</div>
                    <h3 class="tool-title">${tool.name}</h3>
                    <p class="tool-desc">${tool.desc}</p>
                </div>
                <div class="card-footer-action">
                    <span>Buka Tool</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
            `;

            // Dynamic Mouse Radial Effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });

            // Ripple Click & Open Modal
            card.addEventListener('click', (e) => {
                this.createRipple(e, card);
                this.playClickSound();
                this.openToolModal(tool);
            });

            grid.appendChild(card);
        });
    },

    // Ripple Click Animation
    createRipple(event, element) {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;
        const rect = element.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        const ripple = element.getElementsByClassName('ripple-effect')[0];
        if (ripple) ripple.remove();

        element.appendChild(circle);
    },

    // Bind UI Listeners
    bindEvents() {
        // Search Filter
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = TOOLS_CONFIG.filter(t => 
                t.name.toLowerCase().includes(query) || 
                t.desc.toLowerCase().includes(query)
            );
            this.renderToolsGrid(filtered);
        });

        // Close Modal
        document.getElementById('btnCloseModal').addEventListener('click', () => this.closeToolModal());
        document.getElementById('toolModal').addEventListener('click', (e) => {
            if (e.target.id === 'toolModal') this.closeToolModal();
        });

        // Buttons Action Workspace
        document.getElementById('btnGenerate').addEventListener('click', () => this.handleGenerate());
        document.getElementById('btnClear').addEventListener('click', () => this.handleClear());
        document.getElementById('btnDownload').addEventListener('click', () => this.handleDownload());
        document.getElementById('btnCopyLink').addEventListener('click', () => this.handleCopyLink());
        document.getElementById('btnShare').addEventListener('click', () => this.handleShare());
        document.getElementById('btnFullscreen').addEventListener('click', () => this.handleFullscreen());

        // Lightbox Close
        document.getElementById('btnLightboxClose').addEventListener('click', () => {
            document.getElementById('lightboxOverlay').classList.remove('active');
        });
    },

    // Open Modal Generator
    openToolModal(tool) {
        this.activeTool = tool;
        this.generatedUrl = null;

        document.getElementById('modalToolName').innerText = tool.name;
        document.getElementById('modalToolDesc').innerText = tool.desc;
        document.getElementById('modalToolIcon').innerHTML = tool.icon;

        // Render Inputs
        const inputsContainer = document.getElementById('dynamicInputs');
        inputsContainer.innerHTML = '';

        tool.inputs.forEach((input) => {
            const group = document.createElement('div');
            group.className = 'input-group';

            const label = document.createElement('label');
            label.innerText = input.label;

            let field;
            if (input.type === 'select') {
                field = document.createElement('select');
                field.className = 'input-control';
                field.name = input.name;
                input.options.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt;
                    option.innerText = opt;
                    field.appendChild(option);
                });
            } else {
                field = document.createElement('input');
                field.type = input.type || 'text';
                field.className = 'input-control';
                field.name = input.name;
                field.placeholder = input.placeholder || '';
            }

            group.appendChild(label);
            group.appendChild(field);
            inputsContainer.appendChild(group);
        });

        // Reset States
        this.resetPreviewState();
        document.getElementById('toolModal').classList.add('active');
        document.body.style.overflow = 'hidden';

        // Auto Focus First Input
        setTimeout(() => {
            const firstInput = inputsContainer.querySelector('.input-control');
            if (firstInput) firstInput.focus();
        }, 200);
    },

    closeToolModal() {
        document.getElementById('toolModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    resetPreviewState() {
        document.getElementById('emptyPreview').style.display = 'flex';
        document.getElementById('skeletonLoader').classList.remove('active');
        document.getElementById('mediaOutputBox').classList.remove('active');
        document.getElementById('previewActions').classList.remove('active');
        document.getElementById('progressContainer').classList.remove('active');
        document.getElementById('mediaOutputBox').innerHTML = '';
    },

    // Handle Generation Execution
    handleGenerate() {
        if (!this.activeTool) return;
        this.playClickSound();

        // Extract Input Values & Validate
        const inputs = document.querySelectorAll('#dynamicInputs .input-control');
        const formData = {};
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#FF4D4D';
            } else {
                input.style.borderColor = 'var(--glass-border)';
                formData[input.name] = input.value.trim();
            }
        });

        if (!isValid) {
            this.showToast('Harap isi semua kolom input terlebih dahulu!', 'error');
            return;
        }

        // Show Progress & Loading State
        document.getElementById('emptyPreview').style.display = 'none';
        document.getElementById('skeletonLoader').classList.add('active');
        document.getElementById('mediaOutputBox').classList.remove('active');
        document.getElementById('progressContainer').classList.add('active');

        this.animateProgressBar(0, 90, 2000);

        // Build API URL
        const apiUrl = this.activeTool.endpoint(formData);
        this.generatedUrl = apiUrl;

        // Image Preloading Handler with Retry System
        this.loadImageWithRetry(apiUrl, 3)
            .then((url) => {
                this.animateProgressBar(90, 100, 300, () => {
                    document.getElementById('progressContainer').classList.remove('active');
                    document.getElementById('skeletonLoader').classList.remove('active');

                    const mediaBox = document.getElementById('mediaOutputBox');
                    mediaBox.innerHTML = '';

                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = this.activeTool.name;
                    mediaBox.appendChild(img);

                    mediaBox.classList.add('active');
                    document.getElementById('previewActions').classList.add('active');
                    this.showToast('Visual berhasil di-generate!');
                });
            })
            .catch(() => {
                document.getElementById('progressContainer').classList.remove('active');
                document.getElementById('skeletonLoader').classList.remove('active');
                document.getElementById('emptyPreview').style.display = 'flex';
                this.showToast('Gagal memproses gambar dari server API. Coba lagi!', 'error');
            });
    },

    // Retry Logic Image Loader
    loadImageWithRetry(url, retriesLeft) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => {
                if (retriesLeft > 0) {
                    setTimeout(() => {
                        this.loadImageWithRetry(url, retriesLeft - 1).then(resolve).catch(reject);
                    }, 1000);
                } else {
                    reject(new Error('Failed to load image after retries'));
                }
            };
            img.src = url;
        });
    },

    // Progress Bar Animation Helper
    animateProgressBar(start, end, duration, callback) {
        const fill = document.getElementById('progressBarFill');
        const status = document.getElementById('progressStatusText');
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(start + progress * (end - start));
            fill.style.width = `${current}%`;
            status.innerText = `Memproses visual... ${current}%`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else if (callback) {
                callback();
            }
        }
        requestAnimationFrame(step);
    },

    handleClear() {
        this.playClickSound();
        const inputs = document.querySelectorAll('#dynamicInputs .input-control');
        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = 'var(--glass-border)';
        });
        this.resetPreviewState();
        this.showToast('Input berhasil dibersihkan.');
    },

    // Download File Direct Cross-Origin
    async handleDownload() {
        if (!this.generatedUrl) return;
        this.playClickSound();
        this.showToast('Menyiapkan file unduhan...');

        try {
            const response = await fetch(this.generatedUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            const ext = this.activeTool.type === 'gif' ? 'gif' : 'png';
            const filename = `RizkiTools_${this.activeTool.id}_${Date.now()}.${ext}`;

            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);

            this.showToast('Unduhan selesai!');
        } catch (error) {
            window.open(this.generatedUrl, '_blank');
            this.showToast('Membuka gambar secara langsung untuk diunduh.');
        }
    },

    handleCopyLink() {
        if (!this.generatedUrl) return;
        this.playClickSound();
        navigator.clipboard.writeText(this.generatedUrl).then(() => {
            this.showToast('URL Gambar disalin ke clipboard!');
        });
    },

    handleShare() {
        if (!this.generatedUrl) return;
        this.playClickSound();
        if (navigator.share) {
            navigator.share({
                title: 'Rizki Tools Generator',
                text: `Lihat hasil generator visual ${this.activeTool.name} dari Rizki Tools!`,
                url: this.generatedUrl
            }).catch(() => {});
        } else {
            this.handleCopyLink();
        }
    },

    handleFullscreen() {
        if (!this.generatedUrl) return;
        this.playClickSound();
        const lightbox = document.getElementById('lightboxOverlay');
        const content = document.getElementById('lightboxContent');
        content.innerHTML = `<img src="${this.generatedUrl}" alt="Fullscreen Preview">`;
        lightbox.classList.add('active');
    },

    // Custom Toast Notification System
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icon = type === 'error' 
            ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
            : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';

        toast.innerHTML = `${icon} <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // Background Dynamic Canvas (Futuristic Moving Particles)
    renderBackgroundCanvas() {
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.floor((width * height) / 18000);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.4 + 0.1
            });
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }
};
