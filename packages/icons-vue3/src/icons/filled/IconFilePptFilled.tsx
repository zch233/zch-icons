// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePptFilledSvg from 'icons-base/es/asn/FilePptFilled';

export interface FilePptFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePptFilled: FilePptFilledIconType = (props, context) => <Icon name='FilePptFilled' {...{ ...props, ...context.attrs }} icon={FilePptFilledSvg} />;

IconFilePptFilled.displayName = 'IconFilePptFilled';
IconFilePptFilled.theme = 'filled';
IconFilePptFilled.originName = 'file-ppt';

export default IconFilePptFilled;
