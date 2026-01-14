'use client';

import { useState } from 'react';

export default function TestWhatsApp() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testTextMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/test-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: formData.get('phone'),
          message: formData.get('message')
        })
      });
      setResult(await response.json());
    } catch (error) {
      setResult({ error: 'Request failed' });
    }
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">WhatsApp API Test</h1>
      
      <form onSubmit={testTextMessage} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input 
            name="phone" 
            type="text" 
            placeholder="9413129001" 
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea 
            name="message" 
            placeholder="Test message" 
            className="w-full p-2 border rounded h-20"
            required 
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Text Message'}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-medium mb-2">Result:</h3>
          <pre className="text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}