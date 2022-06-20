// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePptFilledSvg from 'icon-base/es/asn/FilePptFilled';

export interface FilePptFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFilePptFilled: FilePptFilledIconType = (props, context) => <Icon name='FilePptFilled' {...{ ...props, ...context.attrs }} icon={FilePptFilledSvg} />;

IconFilePptFilled.displayName = 'IconFilePptFilled';

export default IconFilePptFilled;
