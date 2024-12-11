import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="sm" />
              <span className="font-bold text-xl">3A/ASLA</span>
            </div>
            <p className="text-gray-400">
              Association des Armements Africains, un acteur majeur du développement maritime africain.
            </p>
          </div>
          
          {/* Rest of the footer content remains the same */}
        </div>
      </div>
    </footer>
  );
}