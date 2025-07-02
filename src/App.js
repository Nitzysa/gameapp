import React from "react";
import { motion } from "framer-motion";

export default function GameApp() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🚗 Game App Mockup</h1>

      <section style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
        <h2>Race Mode</h2>
        <p>🔥 Drive and dodge!</p>
        <button>Start</button>
      </section>

      <section style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
        <h2>Character Select</h2>
        <div>👱‍♂️ 👩‍🚀 😼</div>
        <h3>Shop</h3>
        <ul>
          <li>🚗 New Car - 200</li>
          <li>🔥 Nitro - 150</li>
        </ul>
      </section>

      <section style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
        <h2>Boss Fight</h2>
        <div>🚗 vs 😈</div>
        <button>Attack</button>
      </section>

      <section style={{ border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
        <h2>Spin the Wheel</h2>
        <p>🎯 Spin for rewards!</p>
        <button>Spin</button>
      </section>

      <section style={{ border: "1px solid #ccc", padding: 10 }}>
        <h2>Shop</h2>
        <ul>
          <li>❤️ Life - 100</li>
          <li>🚀 Boost - 200</li>
          <li>🐱 Skin - 300</li>
          <li>🎁 Random - 500</li>
        </ul>
      </section>
    </div>
  );
}
