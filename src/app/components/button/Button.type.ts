export interface IButton {
    label: string 
    size: 'sm' | 'md' | 'lg' | 'xl'
    variant: 'primary' | 'secondary' | 'danger' 
    onClick: () => void
}