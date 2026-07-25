/**
 * Rizki Generator Tools - Engine Script
 * Architecture: Object-Literal Modular Pattern
 */

const App = {
    // 1. Definisikan Konfigurasi Input Struktur skema form masing-masing Tools
    toolsConfig: {
        brat: {
            title: "Brat Generator",
            apiUrl: "https://api.cmnty.biz.id/maker/brat?text={text}&apikey=cmnty-bbb66c2431878f83c738fecad51e7c3f",
            inputs: [
                { id: "text", label: "Masukan Teks", type: "text", placeholder: "Contoh: bajuku cerah", required: true }
            ]
        },
        bratvid: {
            title: "Bratvid Video Generator",
            apiUrl: "https://api.cmnty.biz.id/maker/bratvid?text={text}",
            inputs: [
                { id: "text", label: "Masukan Teks Video", type: "text", placeholder: "Contoh: teks video brat", required: true }
            ]
        },
        fakecall: {
            title: "Fake Call Canvas Generator",
            apiUrl: "https://api.synoxcloud.xyz/canvas/fakecall?name={name}&time={time}&pp={pp}",
            inputs: [
                { id: "name", label: "Nama Kontak", type: "text", placeholder: "Contoh: Pevita Pearce", required: true },
                { id: "time", label: "Waktu (Format HH:MM otomatis konversi)", type: "text", placeholder: "Contoh: 00:00", required: true },
                { id: "pp", label: "URL Foto Profil (Image URL)", type: "url", placeholder: "https://example.com/photo.jpg", required: true }
            ]
        },
        naruto: {
            title: "Naruto Text Style Logo",
            apiUrl: "https://api.cmnty.biz.id/maker/naruto?text={text}",
            inputs: [
                { id: "text", label: "Teks Logo Naruto", type: "text", placeholder: "Contoh: Rizki", required: true }
            ]
        },
        dragonball: {
            title: "Dragonball Text Style Logo",
            apiUrl: "https://api.synoxcloud.xyz/canvas/dragonball?text={text}",
            inputs: [
                { id: "text", label: "Teks Logo Dragonball", type: "text", placeholder: "Contoh: Saiyan", required: true }
            ]
        },
        removebg: {
            title: "Hapus Background Image",
            apiUrl: "https://api.cmnty.biz.id/tools/removebg?url={url}",
            inputs: [
                { id: "url", label: "URL Gambar Terbuka", type: "url", placeholder: "https://example.com/photo-to-remove.jpg", required: true }
            ]
        },
        lobiml: {
            title: "Fake Mobile Legends Lobby",
            apiUrl: "https://api.cmnty.biz.id/maker/fake-ml?usr={usr}&rank={rank}&border=random&lobby_type=indo&avatar={avatar}",
            inputs: [
                { id: "usr", label: "Username ML", type: "text", placeholder: "Contoh: RizkiGans", required: true },
                { id: "rank", label: "Pilih Rank", type: "select", options: ["warrior", "elite", "master", "gmaster", "epic", "legend", "mythic", "honor", "glory", "imo"], required: true },
                { id: "avatar", label: "URL Avatar / Foto Profil", type: "url", placeholder: "https://example.com/avatar.jpg", required: true }
            ]
        },
        lobiff: {
            title: "Fake Free Fire Lobby",
            apiUrl: "https://api.cmnty.biz.id/maker/fake-ff?usr={usr}",
            inputs: [
                { id: "usr", label: "Username FF", type: "text", placeholder: "Contoh: R I Z K I • FF", required: true }
            ]
        },
        buatktp: {
            title: "E-KTP Canvas Creator",
            apiUrl: "https://api.cmnty.biz.id/canvas/ektp?provinsi={provinsi}&kota={kota}&nik={nik}&nama={nama}&ttl={ttl}&jenis_kelamin={jenis_kelamin}&golongan_darah={golongan_darah}&alamat={alamat}&rt%2Frw={rtrw}&kel%2Fdesa={keldesa}&kecamatan={kecamatan}&agama={agama}&status={status}&pekerjaan={pekerjaan}&kewarganegaraan=WNI&masa_berlaku=Seumur+Hidup&terbuat={terbuat}&pas_photo={pas_photo}",
            inputs: [
                { id: "provinsi", label: "Provinsi", type: "text", placeholder: "JAWA BARAT", required: true },
                { id: "kota", label: "Kota / Kabupaten", type: "text", placeholder: "KOTA BANDUNG", required: true },
                { id: "nik", label: "NIK (16 Digit)", type: "text", placeholder: "3273000000000000", required: true },
                { id: "nama", label: "Nama Lengkap", type: "text", placeholder: "RIZKI", required: true },
                { id: "ttl", label: "Tempat, Tanggal Lahir", type: "text", placeholder: "BANDUNG, 01-01-2000", required: true },
                { id: "jenis_kelamin", label: "Jenis Kelamin", type: "select", options: ["LAKI-LAKI", "PEREMPUAN"], required: true },
                { id: "golongan_darah", label: "Golongan Darah", type: "select", options: ["A", "B", "AB", "O", "-"], required: true },
                { id: "alamat", label: "Alamat Jalan", type: "text", placeholder: "JL. MERDEKA NO. 1", required: true },
                { id: "rtrw", label: "RT / RW", type: "text", placeholder: "001/002", required: true },
                { id: "keldesa", label: "Kel / Desa", type: "text", placeholder: "BABAKAN", required: true },
                { id: "kecamatan", label: "Kecamatan", type: "text", placeholder: "SUMUR BANDUNG", required: true },
                { id: "agama", label: "Agama", type: "select", options: ["ISLAM", "KRISTEN", "KATOLIK", "HINDU", "BUDDHA", "KHONGHUCU"], required: true },
                { id: "status", label: "Status Perkawinan", type: "select", options: ["BELUM KAWIN", "KAWIN", "CERAI HIDUP", "CERAI MATI"], required: true },
                { id: "pekerjaan", label: "Pekerjaan", type: "text", placeholder: "KARYAWAN SWASTA", required: true },
                { id: "terbuat", label: "Tanggal Pembuatan KTP", type: "text", placeholder: "11-07-2026", required: true },
                { id: "pas_photo", label: "URL Pas Foto KTP", type: "url", placeholder: "https://example.com/pas-foto.jpg", required: true }
            ]
        }
    },

    activeTool: "brat",
    currentBlobUrl: null,

    // 2. DOM Elements Caching
    init() {
        this.dom = {
            sidebar: document.getElementById('sidebar'),
            menuToggle: document.getElementById('menuToggle'),
            navItems: document.querySelectorAll('.nav-item'),
            toolTitle: document.getElementById('toolTitle'),
            dynamicInputs: document.getElementById('dynamicInputs'),
            generatorForm: document.getElementById('generatorForm'),
            loadingOverlay: document.getElementById('loadingOverlay'),
            placeholderText: document.getElementById('placeholderText'),
            resultImage: document.getElementById('resultImage'),
            btnDownload: document.getElementById('btnDownload')
        };

        this.bindEvents();
        this.renderFormFields(this.activeTool);
    },

    // 3. Event Binding
    bindEvents() {
        // Sidebar Navigation
        this.dom.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                this.dom.navItems.forEach(nav => nav.classList.remove('active'));
                const target = e.currentTarget.getAttribute('data-target');
                e.currentTarget.classList.add('active');
                this.activeTool = target;
                this.renderFormFields(target);
                
                // Close sidebar on mobile after clicking
                if (window.innerWidth <= 992) {
                    this.dom.sidebar.classList.remove('active');
                }
            });
        });

        // Mobile Menu Toggle
        this.dom.menuToggle.addEventListener('click', () => {
            this.dom.sidebar.classList.toggle('active');
        });

        // Form Submit Handler
        this.dom.generatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateImage();
        });

        // Download Action Handler
        this.dom.btnDownload.addEventListener('click', () => {
            this.triggerDownload();
        });
    },

    // 4. Render Dynamic HTML Forms
    renderFormFields(toolKey) {
        const config = this.toolsConfig[toolKey];
        this.dom.toolTitle.textContent = config.title;
        this.dom.dynamicInputs.innerHTML = "";
        this.clearResultView();

        config.inputs.forEach(input => {
            const group = document.createElement('div');
            group.className = "form-group";

            const label = document.createElement('label');
            label.setAttribute('for', input.id);
            label.textContent = input.label;
            group.appendChild(label);

            if (input.type === "select") {
                const select = document.createElement('select');
                select.id = input.id;
                select.className = "form-control";
                if(input.required) select.required = true;

                input.options.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt.toLowerCase().replace(/ /g, "+");
                    option.textContent = opt;
                    select.appendChild(option);
                });
                group.appendChild(select);
            } else {
                const inp = document.createElement('input');
                inp.id = input.id;
                inp.type = input.type;
                inp.className = "form-control";
                inp.placeholder = input.placeholder;
                if(input.required) inp.required = true;
                group.appendChild(inp);
            }

            this.dom.dynamicInputs.appendChild(group);
        });
    },

    // 5. Generate Target API URL String
    buildApiUrl() {
        const config = this.toolsConfig[this.activeTool];
        let urlPattern = config.apiUrl;

        config.inputs.forEach(input => {
            const element = document.getElementById(input.id);
            let value = element ? element.value.trim() : "";

            // Aturan Khusus bos Rizki untuk Fake Call %3A (Tanda titik dua `:`)
            if (this.activeTool === 'fakecall' && input.id === 'time') {
                value = value.replace(/:/g, '%3A');
            } else {
                value = encodeURIComponent(value);
            }

            urlPattern = urlPattern.replace(`{${input.id}}`, value);
        });

        return urlPattern;
    },

    // 6. Action: Process API Request & Display View
    async generateImage() {
        if (!this.dom.generatorForm.checkValidity()) {
            alert("Harap isi semua field input yang diwajibkan terlebih dahulu, bos!");
            return;
        }

        const targetUrl = this.buildApiUrl();
        
        // Show loaders
        this.dom.loadingOverlay.classList.remove('hidden');
        this.dom.placeholderText.classList.add('hidden');
        this.dom.resultImage.classList.add('hidden');
        this.dom.btnDownload.classList.add('hidden');

        try {
            // Menggunakan fetch untuk mendapatkan data blob agar bisa di download dengan aman secara local
            const response = await fetch(targetUrl);
            if (!response.ok) throw new Error("Terjadi kesalahan sistem API.");

            const blob = await response.blob();
            
            // Bersihkan memori url blob sebelumnya jika ada
            if (this.currentBlobUrl) {
                URL.revokeObjectURL(this.currentBlobUrl);
            }

            this.currentBlobUrl = URL.createObjectURL(blob);
            
            // Set image view
            this.dom.resultImage.src = this.currentBlobUrl;
            this.dom.resultImage.classList.remove('hidden');
            this.dom.btnDownload.classList.remove('hidden');
        } catch (error) {
            console.error(error);
            alert("Gagal memuat gambar dari server API. Pastikan URL input valid atau API sedang online.");
            this.dom.placeholderText.classList.remove('hidden');
        } finally {
            this.dom.loadingOverlay.classList.add('hidden');
        }
    },

    // 7. Action: Local Download Trigger
    triggerDownload() {
        if (!this.currentBlobUrl) return;
        
        const anchor = document.createElement('a');
        anchor.href = this.currentBlobUrl;
        anchor.download = `Rizki_Generator_${this.activeTool}_${Date.now()}.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    },

    // Helper: Reset view state
    clearResultView() {
        if (this.currentBlobUrl) {
            URL.revokeObjectURL(this.currentBlobUrl);
            this.currentBlobUrl = null;
        }
        this.dom.resultImage.src = "";
        this.dom.resultImage.classList.add('hidden');
        this.dom.btnDownload.classList.add('hidden');
        this.dom.placeholderText.classList.remove('hidden');
    }
};

// Jalankan Engine setelah DOM siap sepenuhnya
document.addEventListener('DOMContentLoaded', () => App.init());
