import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl font-bold mb-6">{user?.name}</h1>
          <div className="space-y-4">
            <div className="bg-base-100 p-4 rounded-lg shadow">
              <p className="text-lg">
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Mobile:</span> {user?.mobile}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Balance:</span> €{" "}
                {user?.balance}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Status:</span> {user?.status}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Role:</span> {user?.role}
              </p>
            </div>
            <button className="btn btn-accent mt-4 w-full md:w-auto">
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
