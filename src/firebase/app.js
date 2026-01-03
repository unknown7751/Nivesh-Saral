import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from 'firebase/firestore'
import { firebaseConfig } from './config'

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

// Connect to Firebase Emulators in development mode
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  try {
    // Connect to Auth Emulator
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
    console.log('✅ Connected to Firebase Auth Emulator')
    
    // Connect to Firestore Emulator
    connectFirestoreEmulator(db, 'localhost', 8080)
    console.log('✅ Connected to Firebase Firestore Emulator')
  } catch (error) {
    console.error('Emulator connection error:', error)
  }
} else if (import.meta.env.DEV) {
  // Disable app verification for testing with real Firebase
  auth.settings.appVerificationDisabledForTesting = true
}

// Enable offline persistence for Firestore (only works with real Firebase, not emulator)
if (import.meta.env.VITE_USE_FIREBASE_EMULATOR !== 'true') {
  enableIndexedDbPersistence(db).catch(() => {
    // Ignore persistence errors (e.g., multiple tabs). Firestore will fallback to memory.
  })
}

export { app, auth, db }
