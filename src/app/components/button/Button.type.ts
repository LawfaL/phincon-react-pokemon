export interface IButton {
    className?: string
    label: string 
    size: 'sm' | 'md' | 'lg' | 'xl'
    variant: 'primary' | 'secondary' | 'danger'
    disabled?: boolean 
    onClick: () => void
}