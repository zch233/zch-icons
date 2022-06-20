// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePdfFilledSvg from 'icon-base/es/asn/FilePdfFilled';

export interface FilePdfFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFilePdfFilled: FilePdfFilledIconType = (props, context) => <Icon name='FilePdfFilled' {...{ ...props, ...context.attrs }} icon={FilePdfFilledSvg} />;

IconFilePdfFilled.displayName = 'IconFilePdfFilled';

export default IconFilePdfFilled;
