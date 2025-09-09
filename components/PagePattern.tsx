export default function PagePattern() {
  return (
    <div
      className='fixed inset-0 pointer-events-none z-[-1] opacity-30 dark:opacity-20'
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='dotGradient' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23d97706' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%23d97706' stop-opacity='0.1'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg fill='url(%23dotGradient)'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='100' cy='20' r='4'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3Ccircle cx='100' cy='60' r='2'/%3E%3Ccircle cx='20' cy='100' r='4'/%3E%3Ccircle cx='60' cy='100' r='2'/%3E%3Ccircle cx='100' cy='100' r='3'/%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3Ccircle cx='80' cy='40' r='2.5'/%3E%3Ccircle cx='40' cy='80' r='2.5'/%3E%3Ccircle cx='80' cy='80' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        animation: "float 20s ease-in-out infinite",
      }}
    />
  );
}
