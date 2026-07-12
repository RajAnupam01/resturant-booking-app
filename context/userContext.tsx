import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

type UserProfile = {
  uid: string;
  name: string;
  email: string;
  phone: string;
};


type UserContextType = {
  authUser: User | null;
  profile: UserProfile | null;
  isGuest: boolean;
  loading: boolean;
  continueAsGuest: () => void;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {

  const [authUser, setAuthUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setAuthUser(firebaseUser);

      if (firebaseUser) {
        setIsGuest(false);

        // Fetch profile from Firestore
        const profileRef = doc(db, "users", firebaseUser.uid);

        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
          setProfile(profileSnap.data() as UserProfile);
        }

      } else {
        setProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const continueAsGuest = () => {
    setIsGuest(true);
  };

  const logout = async () => {
    await signOut(auth);
    setIsGuest(false);
  };

  return (
    <UserContext.Provider
      value={{
        authUser,
        profile,
        isGuest,
        loading,
        continueAsGuest,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};