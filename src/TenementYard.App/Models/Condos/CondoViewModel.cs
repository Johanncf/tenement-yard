using TenementYard.App.Models.Address;

namespace TenementYard.App.Models.Condos;

public class CondoViewModel
{
    public string Id { get; set; }
    public string Name { get; set; }
    public AddressViewModel Address { get; set; }
}
