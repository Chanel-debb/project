const TrackComponent = ({ track }) => {
  return (
    <div
      className="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-50"
    >
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-900">{track.trackingNumber}</span>
      </div>
      <div className="text-sm text-gray-500">
        {track.status}
      </div>
    </div>
  );
}