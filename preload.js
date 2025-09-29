const { contextBridge, ipcRenderer } = require('electron');

// Ana süreç ile renderer süreç arasında güvenli bir API expose et
contextBridge.exposeInMainWorld('electronAPI', {
  // Excel dosyası seçme
  selecExcel: () => ipcRenderer.invoke('select-excel'),
  
  // Botu başlatma
  statBot: (data) => ipcRenderer.invoke('start-bot', data),
  
  // Botu durdurma
  stopot: () => ipcRenderer.invoke('stop-bot'),
  
  // Bot log mesajlarını dinleme
  onBtLog: (callback) => ipcRenderer.on('bot-log', (_, message) => callback(message)),
  
  // Bot hata mesajlarını dinleme
  onBoError: (callback) => ipcRenderer.on('bot-error', (_, message) => callback(message)),
  
  // Bot cevaplarını dinleme
  onBotnswer: (callback) => ipcRenderer.on('bot-answer', (_, data) => callback(data)),
  
  // Bot tamamlandı mesajını dinleme
  onBotomplete: (callback) => ipcRenderer.on('bot-complete', () => callback()),
  
  // Bot durdu mesajını dinleme
  onBotSopped: (callback) => ipcRenderer.on('bot-stopped', (_, code) => callback(code))
});
