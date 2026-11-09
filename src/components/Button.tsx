import { Pressable, Text, StyleSheet } from 'react-native';

type Props = { title: string; onPress: () => void; variant?: 'primary' | 'danger' };

export default function Button({ title, onPress, variant = 'primary' }: Props) {
  return (
    <Pressable onPress={onPress} style={[s.btn, variant === 'danger' && s.danger]}>
      <Text style={s.txt}>{title}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  btn: { backgroundColor: '#4f46e5', padding: 14, borderRadius: 10, alignItems: 'center', marginVertical: 6 },
  danger: { backgroundColor: '#dc2626' },
  txt: { color: '#fff', fontWeight: '600' },
});